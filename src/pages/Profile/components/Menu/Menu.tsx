// icons
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart, FiMapPin, FiDownload } from "react-icons/fi";
import { TbGraph, TbLogout } from "react-icons/tb";
import { BiError } from "react-icons/bi";

// components
import { Aside } from "@/components/ui/Aside";

export function Menu() {
	return (
		<Aside>
			<Aside.Block title="Meu perfil" icon>
				<Aside.List>
					<Aside.Item to="/perfil">
						<FaRegUser size={15} />
						Dados do perfil
					</Aside.Item>
					<Aside.Item to="/perfil/carteiras">
						<FiMapPin size={17} />
						Carteiras
					</Aside.Item>
					<Aside.Item to="/">
						<FiShoppingCart size={18} />
						Atividade
					</Aside.Item>
					<Aside.Item to="/">
						<FaRegHeart size={17} />
						Lista de interesse
					</Aside.Item>
					<Aside.Item to="/">
						<TbGraph size={20} />
						Ofertas
					</Aside.Item>
					<Aside.Item to="/">
						<FiDownload size={18} />
						Arquivos baixados
					</Aside.Item>
					<Aside.Item to="/">
						<BiError size={20} />
						Suporte
					</Aside.Item>
					<Aside.Item to="/">
						<TbLogout size={20} />
						Sair
					</Aside.Item>
				</Aside.List>
			</Aside.Block>
		</Aside>
	);
}
