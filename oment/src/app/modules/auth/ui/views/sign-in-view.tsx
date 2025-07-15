"use client"
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import {Alert, AlertTitle} from "@/components/ui/alert";
import { OctagonAlertIcon } from "lucide-react";
import { useForm } from "react-hook-form";

const formSchema= z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password is required").max(100, "Takeoff the Aluminum hat! Password is too long"),
})

export const SignInView = () => {

    const form=useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    return ( 
        <div className="flex flex-col gap-6">
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    
                    <Form {...form}>
                        <form className="p-6 md:p-10">
                            <div className="flex flex-col gap-6">

                                <div className="flex flex-col items-center text-center">
                                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                                    <p className="text-balanced text-muted-foreground">Login to your Account</p>
                                </div>

                                <div className="grid gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input 
                                                        type="email" 
                                                        placeholder="alien@example.com" 
                                                        {...field} 
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </div>

                        </form>
                    </Form>
                    
                    <div className="bg-[#4730ba] relative hidden md:flex flex-col gap-y-3.5 items-center justify-center p-8">
                        <Image src="/logo.svg" alt="logo" width="60" height="60" />
                        <p className="text-3xl font-semibold text-white">Oment</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}