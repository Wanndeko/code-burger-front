import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'
const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.produtcs,
    icon: ShoppingCartIcon
  },
  {
    id: 3,
    label: 'Novo produto',
    link: paths.newProduct,
    icon: AddShoppingCartIcon
  }
]

export default listLinks
