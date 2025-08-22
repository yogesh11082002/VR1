
// "use client";

// import { services } from "@/lib/services";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function ServicesGrid() {
//   return (
//     <section className="relative overflow-hidden  py-20 px-6 md:px-12">
//       {/* Animated gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 animate-gradient" />

//       {/* Floating blur blobs */}
//       <motion.div
//         animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
//         transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
//         className="absolute top-[-6rem] left-[-6rem] w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"
//       />
//       <motion.div
//         animate={{ y: [0, -25, 0], x: [0, 25, 0] }}
//         transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
//         className="absolute bottom-[-6rem] right-[-6rem] w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"
//       />

//       {/* Grid */}
//       <div className="relative z-10 max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
//           Our <span className="text-blue-600">Services</span>
//         </h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((s, i) => (
//             <motion.div
//               key={s.key}
//               initial={{ opacity: 0, y: 40, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               whileHover={{ scale: 1.05, y: -8 }}
//               className="relative rounded-3xl p-6 shadow-lg overflow-hidden 
//                          bg-gradient-to-br from-white to-blue-50 
//                          border border-gray-200 transition-all duration-500"
//             >
//               {/* Hover glow background */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//                 transition={{ duration: 0.4 }}
//                 className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-xl"
//               />

//               <div className="relative z-10 text-5xl text-blue-600">
//                 {s.icon}
//               </div>
//               <h3 className="relative z-10 mt-4 font-bold text-xl text-gray-900">
//                 {s.title}
//               </h3>
//               <p className="relative z-10 text-slate-700 text-sm mt-2 leading-relaxed">
//                 {s.blurb}
//               </p>

//               <motion.div
//                 whileHover={{ x: 6 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="relative z-10"
//               >
//                 <Link
//                   href={`/#contact`}
//                   className="inline-block mt-5 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold 
//                              shadow-md hover:bg-blue-700 transition-colors"
//                 >
//                   Get Quote →
//                 </Link>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { services } from "@/lib/services";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden py-20 px-6 md:px-12">
      {/* Smooth animated gradient background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 bg-[length:300%_300%]"
      />

      {/* Floating blur blobs */}
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-[-6rem] left-[-6rem] w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute bottom-[-6rem] right-[-6rem] w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"
      />

      {/* Grid */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative rounded-3xl p-6 shadow-xl overflow-hidden 
                         bg-white/80 backdrop-blur-lg border border-gray-200 
                         transition-all duration-500 group"
            >
              {/* Glow on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-indigo-500/30 to-purple-500/30 blur-2xl"
              />

              <div className="relative z-10 text-5xl text-blue-600">
                {s.icon}
              </div>
              <h3 className="relative z-10 mt-4 font-bold text-xl text-gray-900">
                {s.title}
              </h3>
              <p className="relative z-10 text-slate-700 text-sm mt-2 leading-relaxed">
                {s.blurb}
              </p>

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10"
              >
                <Link
                  href={`/#contact`}
                  className="inline-block mt-5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold 
                             shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Quote →
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
