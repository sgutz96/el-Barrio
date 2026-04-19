import { motion } from "motion/react";
import { Sprout, Building, Home, Heart, Trees, Coffee, Palette, Train, Bike, Users } from "lucide-react";

const phases = [
  {
    icon: Sprout,
    title: "Agricultura urbana",
    description: "Cultivos sostenibles en el corazón de la ciudad",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-500/50",
  },
  {
    icon: Building,
    title: "Renovación urbana",
    description: "Transformación y modernización de espacios",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/50",
  },
  {
    icon: Home,
    title: "Vida en casa",
    description: "El hogar como núcleo de la comunidad",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/50",
  },
  {
    icon: Heart,
    title: "Ciudad que cuida",
    description: "Salud y bienestar para todos",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/50",
  },
  {
    icon: Trees,
    title: "Parques y ciclovías",
    description: "Espacios verdes para el disfrute colectivo",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/50",
  },
  {
    icon: Coffee,
    title: "Panadería del barrio",
    description: "Comercio local y puntos de encuentro",
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/50",
  },
  {
    icon: Palette,
    title: "Cultura graffiti",
    description: "Arte urbano y expresión comunitaria",
    color: "from-fuchsia-500 to-purple-500",
    borderColor: "border-fuchsia-500/50",
  },
  {
    icon: Train,
    title: "Transporte masivo",
    description: "Movilidad eficiente y accesible",
    color: "from-red-500 to-orange-500",
    borderColor: "border-red-500/50",
  },
  {
    icon: Bike,
    title: "Movilidad",
    description: "Alternativas sostenibles de transporte",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500/50",
  },
  {
    icon: Users,
    title: "Participación ciudadana",
    description: "La voz de la comunidad en acción",
    color: "from-violet-500 to-purple-500",
    borderColor: "border-violet-500/50",
  },
];

export function Journey() {
  return (
    <section id="recorrido" className="relative py-24 px-6 bg-gradient-to-b from-gray-50 via-purple-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent inline-block">
            El recorrido
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            10 fases interactivas que exploran la evolución de la vida urbana
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group relative p-6 rounded-2xl bg-white border ${phase.borderColor} shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl`}
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                      Fase {index + 1}
                    </span>
                  </div>

                  <h3 className="mb-2 text-gray-800">{phase.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-6">Navega con las flechas o arrastra para explorar</p>
          <div className="flex justify-center gap-2">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-cyan-600' : 'bg-gray-300'} transition-all`}
              ></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
