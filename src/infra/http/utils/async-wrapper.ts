import { AppError } from "../errors/app-error";

export function asyncWrapper(fn: Function) {
  try {
    return fn();
  } catch (err: unknown) {
    console.log(err);
    if (err instanceof AppError) {
      return { error: { message: err.message, statusCode: err.statusCode } };
    }

    if (err instanceof Error) {
      return { error: { message: err.message, statusCode: 500 } };
    }

    return { error: { message: "something went wrong", statusCode: 500 } };
  }
}
