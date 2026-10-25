import { LuPlane, LuLeaf, LuWind, LuCompass, LuGraduationCap, LuBrainCircuit, LuClipboardCheck, LuWheat, LuCamera } from 'react-icons/lu'

export const NAV = ['Inicio', 'Nosotros', 'Servicios', 'Proyectos', 'Contacto']

export const LINES = [
  { Icon: LuPlane, title: 'Ingeniería aeronáutica', text: 'Soluciones técnicas y proyectos aeronáuticos.' },
  { Icon: LuLeaf, title: 'Proyectos agro sostenibles', text: 'Desarrollo rural y agricultura de precisión.' },
  { Icon: LuWind, title: 'Energías renovables', text: 'Energía limpia para un mejor mañana.' },
  { Icon: LuCompass, title: 'Medición', text: 'Servicios de medición y análisis técnico.' },
  { Icon: LuGraduationCap, title: 'Capacitación', text: 'Formación técnica y transferencia de conocimiento.' },
]

export const SERVICES = [
  {
    Icon: LuBrainCircuit,
    title: 'Software aeronáutico SaaS con IA agéntica',
    intro: 'Plataformas en la nube para operadores aéreos, talleres de mantenimiento y escuelas de aviación. Agentes de IA que no solo responden: ejecutan tareas, cruzan información y alertan antes de que algo falle.',
    items: [
      'Gestión de mantenimiento inteligente: control de componentes, horas y ciclos, vencimientos, directivas de aeronavegabilidad (AD) y boletines de servicio (SB)',
      'Asistentes regulatorios: consulta de los RAC y manuales técnicos en lenguaje natural, con la fuente citada',
      'Agentes operativos: órdenes de trabajo, reportes técnicos y paquetes de documentación automatizados',
      'Planeación de flota y tripulaciones: disponibilidad, programación y alertas',
      'Integración con las herramientas que el operador ya usa',
    ],
  },
  {
    Icon: LuClipboardCheck,
    title: 'Consultoría aeronáutica para OMA y operadores',
    intro: 'Acompañamiento técnico y regulatorio para organizaciones de mantenimiento aprobadas y operadores aéreos, desde la certificación hasta la operación diaria.',
    items: [
      'Certificación y renovación de OMA: preparación del proceso ante la Aerocivil bajo RAC 145',
      'Elaboración y actualización de manuales: manual de la organización de mantenimiento, procedimientos e instructivos',
      'Programas de mantenimiento y aeronavegabilidad continuada para operadores bajo RAC 121 y RAC 135',
      'Auditorías internas y preparación para inspecciones de la autoridad',
      'SMS (gestión de seguridad operacional): implementación, matrices de riesgo e indicadores',
      'Ingeniería de mantenimiento: órdenes de ingeniería, modificaciones e instalación de equipos',
      'Capacitación técnica del personal en regulación y procedimientos',
    ],
  },
  {
    Icon: LuWheat,
    title: 'Agro y ganadería de precisión',
    intro: 'Visión artificial y análisis de imágenes aéreas para tomar decisiones en campo con datos.',
    items: [
      'Análisis de terreno: mapas de vegetación, estado de pasturas, zonas de estrés hídrico y planeación de potreros',
      'Conteo automático de ganado desde imágenes de dron',
      'Identificación individual de animales y seguimiento del hato',
      'Estimación de peso sin báscula, a partir de imagen',
      'Detección temprana de plagas y enfermedades en cultivos como palma, café y frutales',
      'Reportes y tableros para el ganadero o el agrónomo',
    ],
  },
  {
    Icon: LuCamera,
    title: 'Soluciones con drones para la industria',
    intro: 'Operación de drones con procesamiento de datos e IA, adaptada a cada sector.',
    items: [
      'Inspección de infraestructura: líneas eléctricas, torres, antenas, puentes y paneles solares',
      'Fotogrametría y topografía: ortomosaicos, modelos 3D y cálculo de volúmenes para construcción y minería',
      'Termografía aérea: puntos calientes, fugas térmicas y fallas eléctricas',
      'Monitoreo ambiental: cobertura vegetal, cuerpos de agua y áreas protegidas',
      'Drones y cargas útiles a la medida: sensores, cámaras, telemetría y estación terrena',
    ],
  },
]