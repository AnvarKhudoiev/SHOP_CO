import { CreateUserSchema, registerUser, type CreateUser } from "@/api/Auth.api"
import { queryClient } from "@/utils/queryClient"
import { useMutation } from "@tanstack/react-query"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"

export const Registration = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateUser>({
        resolver: zodResolver(CreateUserSchema)
    })

    const navigate = useNavigate();

    const createUserMutation = useMutation({
        mutationFn: registerUser,
        onSuccess(data) {
            console.log(data)
            queryClient.invalidateQueries({ queryKey: ['users'] });
            navigate('/login');
            reset()
        },
        onError(error) {
            console.log("ERROR", error);
        }
    })

    const onSubmit = (data: CreateUser) => {
        createUserMutation.mutate(data)
    };

    return (
        <div className="w-screen mx-auto">
            <div className="w-[90%] sm:w-[75%] md:w-[60%] xl:w-200 mx-auto text-center pt-7 flex flex-col gap-5">
                <div>
                    <h1 className="font-satoshi font-medium text-2xl lg:text-3xl">Create an account</h1>
                    <span className="font-satoshi font-normal text-[12px] lg:tetx-sm">Already have an ccount? <Link className="underline cursor-pointer" to="/login">Log in</Link> </span>
                </div>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-start gap-1">
                        <label className="font-satoshi font-normal text-[12px] lg:text-[16px]" htmlFor="nameI" >What should we call you?</label>
                        <input className="border w-full rounded-md pl-5 py-3 text-[12px] lg:text-[14px]" {...register('username')} id="nameI" placeholder="Enter your profile name" type="text" />
                        {errors.username && <span>{errors.username?.message}</span>}
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <label className="font-satoshi font-normal text-[12px] lg:text-[16px]" htmlFor="emailI" >What’s your email?</label>
                        <input className="border w-full rounded-md pl-5 py-3 text-[12px] lg:text-[14px]" {...register('email')} id="emailI" placeholder="Enter your email address" type="email" />
                        {errors.email && <span>{errors.email?.message}</span>}
                    </div>
                    <div className="flex flex-col items-start gap-1">
                        <label className="font-satoshi font-normal text-[12px] lg:text-[16px]" htmlFor="passwordI">Create a password</label>
                        <input className="border w-full rounded-md pl-5 py-3 text-[12px] lg:text-[14px]" {...register('password')} id="passwordI" placeholder="Enter your password" type="password" />
                        {errors.password && <span>{errors.password?.message}</span>}
                    </div>
                    <div className="lg:mt-5">
                        <button disabled={createUserMutation.isPending} type="submit" className="bg-black/10 cursor-pointer text-center w-[80%] border text-sm lg:text-[16px] rounded-[40px] font-satoshi font-medium py-1.5 lg:py-3">Create an account</button>
                    </div>
                </form>
            </div>
        </div>
    )
}