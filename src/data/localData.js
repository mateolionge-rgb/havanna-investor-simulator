// Datos de la Franquicia Havanna para el simulador y las secciones del trabajo práctico
export const investmentBreakdown = [
  { item: 'Obra Civil, Mobiliario, Equipamiento y Gastos Varios', value: 150000, pct: 77.1, desc: 'Remodelación, instalaciones eléctricas, sanitarias, aire acondicionado, iluminación, acabados, equipamiento completo de cocina y cafetería, y mobiliario de salón.' },
  { item: 'Pedido Inicial de Mercadería, Insumos y Bazar', value: 25000, pct: 12.9, desc: 'Primer lote de alfajores, chocolates, café en grano, dulce de leche, packaging oficial, consumibles, bazar y vajilla oficial.' },
  { item: 'Fee de Ingreso', value: 19500, pct: 10.0, desc: 'Derecho de uso de marca, manuales de know-how y capacitación inicial de todo el personal.' },
];

export const totalInvestmentValue = 194500;

export const whyHavannaPoints = [
  {
    title: 'Marca Reconocida',
    description: 'Havanna es una marca argentina asociada a calidad, tradición, alfajores, chocolates y cafetería premium.',
    icon: 'Award',
  },
  {
    title: 'Sistema Probado',
    description: 'El modelo de franquicia permite ingresar a un negocio ya desarrollado, con procesos, estándares y know-how previamente establecidos.',
    icon: 'CheckSquare',
  },
  {
    title: 'Modelo Mixto',
    description: 'La unidad de negocio no depende solo de un producto. Combina cafetería, venta de alfajores, chocolates, Havannets, productos para llevar, regalos y posibles ventas corporativas.',
    icon: 'Layers',
  },
  {
    title: 'Consumo Continuo',
    description: 'El formato Havanna Café permite ventas durante todo el año, reduciendo la dependencia de la estacionalidad turística.',
    icon: 'Calendar',
  },
  {
    title: 'Ventaja Competitiva',
    description: 'La marca, los productos distintivos, la experiencia de consumo y el posicionamiento premium generan barreras de entrada frente a competidores independientes.',
    icon: 'Shield',
  },
];

export const franchiseContractClauses = [
  {
    id: 'prazo',
    title: 'Plazo de Duración',
    reference: 'Art. 1516 Código Civil y Comercial',
    summary: '4 a 5 años (Sugerido)',
    description: 'El plazo mínimo legal de las franquicias es de 4 años. Se sugiere un plazo contractual de 4 a 5 años. Esto otorga estabilidad temporal razonable para amortizar la inversión inicial (USD 194.500) y obtener ganancias antes de la renovación comercial.',
  },
  {
    id: 'canon',
    title: 'Fee de Ingreso y Regalías',
    reference: 'Aspecto Comercial y Tributario',
    summary: 'USD 19.500 + 6% Regalías + 2% Publicidad',
    description: 'Un fee de ingreso inicial no reembolsable por el derecho de uso de marca y el know-how. Mensualmente, se abona un 6% de las ventas brutas netas de IVA en concepto de regalías y un 2% adicional destinado al Fondo de Publicidad Institucional administrado por Havanna.',
  },
  {
    id: 'exclusividad',
    title: 'Exclusividad Territorial',
    reference: 'Art. 1517 Código Civil y Comercial',
    summary: 'Zona de Exclusión Delimitada',
    description: 'Havanna garantiza una zona territorial exclusiva para evitar la canibalización entre locales. El franquiciado no puede operar otro local ni realizar publicidad directa fuera de su zona, mientras que el franquiciante se obliga a no autorizar otra sucursal en dicho radio comercial.',
  },
  {
    id: 'abastecimiento',
    title: 'Suministro Exclusivo',
    reference: 'Art. 1519 CCyCN (Obligaciones)',
    summary: '100% de productos marca Havanna',
    description: 'El franquiciado debe comprar la totalidad de los productos comestibles terminados, café, insumos específicos y packaging oficial a Havanna S.A. o a los distribuidores autorizados. Esto asegura la uniformidad de la calidad y del menú.',
  },
  {
    id: 'responsabilidad',
    title: 'Ausencia de Relación Laboral',
    reference: 'Art. 1520 Código Civil y Comercial',
    summary: 'Responsabilidad Independiente',
    description: 'El franquiciante no es responsable por las obligaciones del franquiciado, salvo disposición legal en contrario. Los empleados del local dependen contractualmente de forma exclusiva del franquiciado. El franquiciante no responde solidariamente por reclamos laborales, excepto fraude laboral.',
  },
];

export const mutuoLoanDetails = {
  description: 'Contrato de Mutuo Comercial (Préstamo) estructurado para el financiamiento de USD 134.500 de la inversión requerida. El restante (USD 60.000) es aportado por los socios como capital propio (Equity).',
  terms: [
    { label: 'Monto a Financiar (Mutuo)', value: 'USD 134.500', desc: 'USD 134.500 mediante mutuo.' },
    { label: 'Tasa Nominal Anual (TNA)', value: '8.5% en USD', desc: 'Tasa fija pactada en dólares (supuesto académico editable) para amortización mensual.' },
    { label: 'Plazo de Amortización', value: '36 meses (3 años)', desc: 'Devolución en 36 cuotas mensuales, iguales y consecutivas.' },
    { label: 'Sistema de Amortización', value: 'Francés', desc: 'Cuotas mensuales fijas que contienen capital e intereses (el interés decrece y el capital amortizado crece).' },
    { label: 'Garantías Posibles', value: 'Fianza, Pagaré, Prenda o Cesión', desc: 'Fianza personal de los socios, pagaré, prenda sobre bienes del negocio o cesión parcial de ingresos como alternativas de cobertura.' },
  ],
};

export const defaultSimParams = {
  // Inputs
  ticketPromedio: 8.00, // en USD
  transaccionesMensuales: 6500, // aprox. 216 clientes por día
  cogsPct: 36.0, // Costo de Mercadería Vendida (café, alfajores, leche, etc.)
  alquilerMensual: 5000, // en USD
  costoSueldos: 9500, // sueldos personal y cargas
  serviciosImpuestosFijos: 3450, // luz, gas, internet, tasas municipales, contador
  regaliasPct: 6.0, // Regalías Havanna
  publicidadPct: 2.0, // Fondo de publicidad Havanna
  impuestosVentasPct: 5.0, // Ingresos Brutos, tasas asociadas a facturación
};

export const scenarios = [
  {
    id: 'pesimista',
    name: 'Escenario Pesimista',
    description: 'Baja afluencia de público, costos fijos elevados o ubicación menos favorable. El negocio sobrevive, pero el recupero de inversión es lento.',
    badgeColor: 'bg-red-500/20 text-red-400 border-red-500/30',
    params: {
      ticketPromedio: 7.20,
      transaccionesMensuales: 4500,
      cogsPct: 38.0,
      alquilerMensual: 4500,
      costoSueldos: 5500,
      serviciosImpuestosFijos: 2300,
      regaliasPct: 6.0,
      publicidadPct: 2.0,
      impuestosVentasPct: 5.0,
    }
  },
  {
    id: 'realista',
    name: 'Escenario Realista',
    description: 'Desempeño razonable para una franquicia bien ubicada, con flujo estable de clientes y control de costos.',
    badgeColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    params: {
      ticketPromedio: 8.00,
      transaccionesMensuales: 6500,
      cogsPct: 36.0,
      alquilerMensual: 5000,
      costoSueldos: 9500,
      serviciosImpuestosFijos: 3450,
      regaliasPct: 6.0,
      publicidadPct: 2.0,
      impuestosVentasPct: 5.0,
    }
  },
  {
    id: 'optimista',
    name: 'Escenario Optimista',
    description: 'Excelente ubicación, alta rotación, buena eficiencia operativa y fuerte aceptación del público.',
    badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    params: {
      ticketPromedio: 9.00,
      transaccionesMensuales: 8500,
      cogsPct: 34.5,
      alquilerMensual: 6000,
      costoSueldos: 15500,
      serviciosImpuestosFijos: 5090,
      regaliasPct: 6.0,
      publicidadPct: 2.0,
      impuestosVentasPct: 5.0,
    }
  }
];

export const juridicoEconomicoPoints = [
  {
    category: 'Derecho Comercial e Institutos Contractuales',
    title: 'Ley de Franquicias (Arts. 1512-1524 CCyCN)',
    description: 'La tipificación del contrato en el Código Civil y Comercial otorga seguridad jurídica a las partes. Se establecen obligaciones claras sobre entrega de información económica (un año de balances previos en marcas con trayectoria) y transferencia de know-how.',
    legalFocus: 'Garantiza que el franquiciado no sea considerado socio ni dependiente laboral directo del franquiciante.'
  },
  {
    category: 'Riesgos Económicos y Financieros',
    title: 'Descalce de Monedas e Inflación',
    description: 'La inversión inicial está cotizada en dólares estadounidenses (USD 194.500), mientras que la facturación diaria del local se realiza en pesos argentinos (ARS). Esto expone al inversor al riesgo cambiario y la necesidad de ajustar precios de venta rápidamente para mantener los márgenes operativos en moneda dura.',
    legalFocus: 'Uso de contratos de mutuo dolarizados y negociación de alquileres comerciales indexados.'
  },
  {
    category: 'Derecho Laboral y Solidaridad',
    title: 'Solidaridad Laboral (Art. 30 LCT vs CCyCN)',
    description: 'El Art. 1520 del CCyCN excluye expresamente la responsabilidad solidaria del franquiciante por obligaciones laborales del franquiciado, salvo fraude. No obstante, en la jurisprudencia argentina subsisten fallos donde se aplica el Art. 30 de la Ley de Contrato de Trabajo (LCT) si se interpreta que la actividad de cafetería hace a la actividad normal y específica del franquiciante.',
    legalFocus: 'Es fundamental el correcto encuadre del personal bajo convenios colectivos pertinentes (e.g. Pasteleros o Gastronómicos) y control administrativo estricto.'
  },
  {
    category: 'Derecho del Consumidor',
    title: 'Responsabilidad por Calidad y Producto',
    description: 'Tanto Havanna (fabricante) como el franquiciado (distribuidor/vendedor) son solidariamente responsables ante los consumidores por daños derivados de vicios en los productos alimenticios según el Art. 40 de la Ley de Defensa del Consumidor (Ley 24.240).',
    legalFocus: 'Contratación de un seguro de Responsabilidad Civil Comprensiva y cumplimiento riguroso del protocolo de bromatología.'
  }
];
