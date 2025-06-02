import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || '12345';
const JWT_EXPIRATION = '1h'; // 1 hora de validade

export interface JwtPayload {
  userId: string;
  role?: string;
}

export function generateToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
}

export function verifyToken(token: string): JwtPayload {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    throw new Error('Token inválido ou expirado.');
  }
}
