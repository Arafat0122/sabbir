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
    <div className="relative min-h-screen px-4 pt-32 pb-16 bg-[#0e0e0e] text-white overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.sscus.com.my/wp-content/uploads/2019/07/bg-world-connect.jpg')] bg-cover bg-center bg-fixed opacity-25 blur-sm"></div>

      {/* Optional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-[#0e0e0e]/30 to-black/50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h3 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-sky-400 to-sky-800 text-transparent bg-clip-text">
          Contact Us
        </h3>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">
          We'd love to hear from you. Reach out and we’ll respond shortly.
        </p>

        <div className="flex flex-col md:flex-row gap-12 mt-16 px-4 py-10 rounded-2xl backdrop-blur-lg bg-white/10 shadow-2xl border border-white/10">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-[60%] space-y-6 text-left"
          >
            <div className="space-y-5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-5 py-3 text-white bg-transparent border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-5 py-3 text-white bg-transparent border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-5 py-3 text-white bg-transparent border border-white/20 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <GradientButton
              type="submit"
              variant="secondary"
              icon={MessageCircle}
              className="w-full mt-4"
            >
              Send Message
            </GradientButton>
          </form>

          {/* Contact Info */}
          <div className="w-full md:w-[40%] text-left space-y-8">
            <div>
              <h4 className="text-lg font-bold text-sky-400 mb-2">Visit Us</h4>
              <p className="text-gray-300 leading-relaxed">
                261 Homebush Road<br />
                Strathfield South 2136
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-sky-400 mb-2">Talk to Us</h4>
              <p className="text-gray-300">+61 421 397 998</p>
              <p className="text-gray-300">helen@helenarvan.com</p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-sky-400 mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <Link to="#" className="text-white hover:text-sky-400 transition-colors">
                  <Twitter />
                </Link>
                <Link to="#" className="text-white hover:text-sky-400 transition-colors">
                  <Linkedin />
                </Link>
                <Link to="#" className="text-white hover:text-sky-400 transition-colors">
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}