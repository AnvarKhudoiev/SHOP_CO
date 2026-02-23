import { useNavigate } from "react-router-dom"

export const Profile = () => {
    const navigate = useNavigate();
    return ( <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
      <h1 className="text-2xl font-semibold mb-4">
        FakeStore API возвращает только token
      </h1>

      <p className="text-gray-600 mb-6 max-w-md">
        Endpoint https://fakestoreapi.com/auth/login возвращает только token.
        Данные пользователя (username, email и т.д.) API не предоставляет.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-black text-white rounded-lg cursor-pointer hover:opacity-80 transition"
      >
        Назад
      </button>
    </div>)
}