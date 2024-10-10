import Logo from "../assets/logos/logo-pomo.png"
import LoadGif from "../assets/loading.gif"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export const Loading = () => {
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate('/apresentation')
  }

  useEffect(() => {
    const timer = setTimeout(navigateTo, 4000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-40 w-screen h-screen bg-primary">
        <section className="w-44 h-44 md:w-60 md:h-60">
          <img src={Logo} alt="Logo Pomo" />
        </section>
        <section className="w-20 h-20">
          <img src={LoadGif} alt="Loading Gif" />
        </section>

      </section>

    </>
  )
}

