import React from 'react'

function InfoSection() {
  return (
    <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="public/lamborghiniUrus.jfif"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
          ¿Quiénes Somos?
          </h2>

          <p className="mt-4 text-gray-600">
          En Karkamilo, somos apasionados por los autos y por ayudarte a encontrar el vehículo perfecto que se ajuste a tu estilo de vida y necesidades. Nacimos con el objetivo de revolucionar la experiencia de compra y venta de automóviles, ofreciendo un servicio transparente, confiable y personalizado.

Nuestro equipo está compuesto por expertos del mundo automotriz, comprometidos con brindarte asesoramiento de calidad y soluciones innovadoras para que puedas tomar decisiones informadas. Ya sea que estés buscando un auto nuevo, seminuevo o quieras vender tu vehículo actual, en Karkamilo hacemos que el proceso sea sencillo y sin complicaciones.

Creemos que cada cliente es único, y por eso ponemos el enfoque en ti. Con una plataforma moderna y fácil de usar, acompañada por atención personalizada, queremos asegurarnos de que disfrutes cada paso del camino hacia tu próximo auto.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSection