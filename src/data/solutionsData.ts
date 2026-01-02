export interface SolutionCard {
  number: string;
  title: string;
  description: string;
  variant: 'blue' | 'white' | 'cyan'; // Para controlar el color de fondo
}

export const solutionsData: SolutionCard[] = [
  {
    number: "01.",
    title: "Espacio de trabajo centralizado",
    description: "Unificamos Marketing, Ventas y Servicio en una sola plataforma, con visión 360° del cliente en tiempo real.",
    variant: "blue"
  },
  {
    number: "02.",
    title: "Flujos de Trabajo Alineados",
    description: "Diseñamos y automatizamos procesos modulares que se adaptan al crecimiento de su empresa.",
    variant: "white"
  },
  {
    number: "03.",
    title: "Gobernanza y Previsibilidad",
    description: "Establecemos métricas, reportes y reglas de datos universales. Datos confiables y de calidad desde cualquier lugar.",
    variant: "cyan"
  }
];