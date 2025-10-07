import tailwindGer from "../hooks/tailwind"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ color = "white.main", children, className, ...props }) => {
  // color JSON からクラスを取得、存在しない場合は空文字
  const colorClass = tailwindGer({ color, parts: "button" }) || ""

  // className を最後に追加
  const finalClass = [colorClass, className].filter(Boolean).join(" ")

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  )
}

export default Button
