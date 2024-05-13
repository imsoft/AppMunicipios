import Image from "next/image";
import Link from "next/link";

const emergencyNumbers = [
  {
    name: "Emergencias",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "911",
    href: "tel:911",
  },
  {
    name: "Capufe",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "074",
    href: "tel:074",
  },
  {
    name: "Ángeles Verdes",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "078",
    href: "tel:078",
  },
  {
    name: "Cruz Roja",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "55 5395 1111",
    href: "tel:5553951111",
  },
  {
    name: "LOCATEL",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "55 5658 1111",
    href: "tel:5556581111",
  },
  {
    name: "Protección Civil",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "55 5128 0000",
    href: "tel:5551280000",
  },
  {
    name: "Denuncia Anónima",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "089",
    href: "tel:089",
  },
  {
    name: "Incendios Forestales",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "800 4623 6346",
    href: "tel:80046236346",
  },
  {
    name: "Policía Federal",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "088",
    href: "tel:088",
  },
  {
    name: "Fuga de gas",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "911",
    href: "tel:911",
  },
  {
    name: "Fuga de agua",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "5654 3210",
    href: "tel:56543210",
  },
  {
    name: "Bomberos",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    phoneNumber: "5768 3700",
    href: "tel:57683700",
  },
];

const EmergencyPage = () => {
  return (
    <>
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Asistencia Inmediata: <br /> Números de Emergencia
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Para situaciones urgentes o asistencia, aquí encontrarás los
              números esenciales. En San Brandon, tu seguridad es nuestra
              prioridad.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {emergencyNumbers.map((emergencyNumber) => (
              <li key={emergencyNumber.name}>
                <Link
                  className="text-sm leading-6 text-gray-600"
                  href={emergencyNumber.href}
                >
                  <Image
                    className="mx-auto h-24 w-24 rounded-full"
                    src={emergencyNumber.imageUrl}
                    alt=""
                    width={96}
                    height={96}
                  />
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {emergencyNumber.name}
                  </h3>
                  {emergencyNumber.phoneNumber}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default EmergencyPage;
