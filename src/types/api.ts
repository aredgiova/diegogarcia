// ─── Respuesta estándar de API ────────────────────────────────────────────────

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  data: T;
  message: null;
}

export interface ApiErrorResponse {
  success: false;
  data: null;
  message: string;
  error: {
    code: string;
  };
}

export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse;

// ─── Helpers de respuesta ─────────────────────────────────────────────────────

export function successResponse<T>(data: T): ApiSuccessResponse<T> {
  return { success: true, data, message: null };
}

export function errorResponse(
  message: string,
  code: string
): ApiErrorResponse {
  return { success: false, data: null, message, error: { code } };
}
