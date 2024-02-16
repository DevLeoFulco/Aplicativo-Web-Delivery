import { Link, LinkProps } from "expo-router";



export function LinkButton({ ...props }: LinkProps<string>) {
  return (
    <Link className="text-slate-300 text-center text-base font-body" {...props}
    >Voltar aos itens</Link>
  );
}
