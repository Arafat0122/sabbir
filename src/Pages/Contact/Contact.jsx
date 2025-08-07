import { useForm } from 'react-hook-form';
import { Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientButton from '@/components/ui/GradientButton'; 

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div className="min-h-screen px-4 py-16 mt-10 md:mt-20 sm:px-6 lg:px-8">
      <div className="mx-auto text-center max-w-7xl">
        <h3 className="text-4xl font-extrabold tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
          Contact Us
        </h3>
        <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-500">
          Please feel free to contact us and we will get back to you as soon as we can.
        </p>

        <div className="flex flex-col p-4 mt-10 rounded-md md:mt-20 md:gap-20 lg:p-10 md:flex-row bg-primary/20">
          {/* Form Section */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full p-4 space-y-6 text-left md:p-8 md:w-[55%]"
          >
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 text-gray-900 bg-transparent border-b border-primary focus:outline-none focus:border-primary placeholder:text-gray-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 text-gray-900 bg-transparent border-b border-primary focus:outline-none focus:border-primary placeholder:text-gray-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-3 text-gray-900 bg-transparent border-b border-primary focus:outline-none focus:border-primary placeholder:text-gray-500"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>
            </div>

     
            <div className="flex w-full">
              <GradientButton
                type="submit"
                variant="secondary"
                icon={MessageCircle}
                className="w-full"
              >
                Send
              </GradientButton>
            </div>
          </form>

          {/* Contact Info Section */}
          <div className="flex flex-col justify-between w-full gap-4 p-4 text-left md:p-8 md:w-[30%]">
            <div>
              <h4 className="mb-2 font-sans text-xl font-semibold">Visit us</h4>
              <p className="font-sans text-gray-900">
                261 Homebush Road<br />
                Strathfield South 2136
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-sans text-xl font-semibold">Talk to us</h4>
              <p className="font-sans text-gray-900">+61 421 397 998</p>
              <p className="font-sans text-gray-900">helen@helenarvan.com</p>
            </div>

           
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-900 transition-colors hover:text-blue-500">
                <Twitter />
              </Link>
              <Link to="#" className="text-gray-900 transition-colors hover:text-blue-500">
                <Linkedin />
              </Link>
              <Link to="#" className="text-gray-900 transition-colors hover:text-blue-500">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
