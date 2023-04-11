import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

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
    icon: ShoppingBagIcon
  }
]

export default listLinks
