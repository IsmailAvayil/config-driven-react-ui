export const profileDrivenData = [
  {
    type: "profile",
    props: {
      name: "Mohammed Ismail",
      role: "Frontend Developer",
      email: "ismail@gmail.com",
      age: 25,
      location: "Malappuram, India",
      avatar: "assets/images/profile.jpg",
      bio: "Passionate frontend developer building scalable, config-driven UI applications.",
      styles: {
        container:
          "flex flex-col items-center gap-6 p-6 bg-white rounded-2xl shadow-md w-fit mx-auto my-6",
        avatar: "w-32 h-32 rounded-full object-cover border-4 border-blue-500",
        name: "text-2xl font-bold text-gray-800",
        role: "text-blue-600 font-medium",
        bio: "text-gray-600 text-sm text-center sm:text-left",
        info: "text-gray-500 text-sm",
        actions: "flex gap-3 mt-4",
      },
    },
  },
];
