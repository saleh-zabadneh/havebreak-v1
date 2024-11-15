export {};

export type Roles = "admin" | "seller" | "member";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
