import { z } from "zod";
import { validateResponse } from "./validateResponse"

export const CreateUserSchema = z.object({
    username: z.string().nonempty('Username is required!'),
    email: z.email('Email format is incorrect!').nonempty(),
    password: z.string().min(1, 'Use 8 or more characters').nonempty(),
})

export const LoginUserSchema = z.object({
    username: z.string().nonempty('Username is required!'),
    password: z.string().min(1, 'Use 1 or more characters').nonempty(),
})

export const LoginResponseSchema = z.object({
  token: z.string()
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;

export type CreateUser = z.infer<typeof CreateUserSchema>;

export type LoginUser = z.infer<typeof LoginUserSchema>;


export function registerUser({username, email, password}: CreateUser): Promise<void> {
    return fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, email, password})
    }).then(validateResponse).then(() => undefined);
}


export function login({ username, password }: LoginUser): Promise<LoginResponse> {
  return fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(validateResponse)
    .then((res) => res.json())
    .then((data) => LoginResponseSchema.parse(data));
}