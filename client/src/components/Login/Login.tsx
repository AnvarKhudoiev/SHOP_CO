import { LoginUserSchema, login, type LoginUser } from "@/api/Auth.api"
import { queryClient } from "@/utils/queryClient"
import { useMutation } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import type { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/store/authSlice";

export const Login = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginUser>({
        resolver: zodResolver(LoginUserSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    const navigate = useNavigate();

    const createUserMutation = useMutation({
        mutationFn: login,
        onSuccess(data) {
            dispatch(loginSuccess({token: data.token}));
            console.log("SUCCESS", data);
            queryClient.invalidateQueries({ queryKey: ['users'] });
            navigate('/');
            reset()
        },
        onError(error) {
            console.log("ERROR", error);
        }
    })

    const onSubmit = (data: LoginUser) => {
        createUserMutation.mutate(data)
    };

    return (
        <div className="w-screen mx-auto">
            <div className="w-[90%] sm:w-[75%] md:w-[60%] xl:w-200 mx-auto text-center pt-7 flex flex-col gap-5">
                <div>
                    <h1 className="font-satoshi font-medium text-2xl lg:text-3xl">Log in</h1>
                    <span className="font-satoshi font-normal text-[12px] lg:tetx-sm">Don't have an account? <Link className="underline cursor-pointer" to="/registration">Sign up</Link> </span>
                </div>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-start gap-1">
                        <label className="font-satoshi font-normal text-[12px] lg:text-[16px]" htmlFor="nameI" >Username</label>
                        <input className="border w-full rounded-md pl-5 py-3 text-[12px] lg:text-[14px]" value={'johnd'} {...register('username')} id="nameI" placeholder="Enter your profile name" type="text" />
                        {errors.username && <span>{errors.username?.message}</span>}
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <label className="font-satoshi font-normal text-[12px] lg:text-[16px]" htmlFor="passwordI">Password</label>
                        <input className="border w-full rounded-md pl-5 py-3 text-[12px] lg:text-[14px]" value={'m38rmF$'} {...register('password')} id="passwordI" placeholder="Enter your password" type="password" />
                        {errors.password && <span>{errors.password?.message}</span>}
                    </div>
                    <div className="lg:mt-5">
                        <button disabled={createUserMutation.isPending} type="submit" className="bg-black/10 text-center cursor-pointer w-[80%] border text-sm lg:text-[16px] rounded-[40px] font-satoshi font-medium py-1.5 lg:py-3">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}