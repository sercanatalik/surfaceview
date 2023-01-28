// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {  QuestionOutlined, DeploymentUnitOutlined , CodepenCircleOutlined} from '@ant-design/icons';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  CodepenCircleOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other: NavItemType = {
  id: 'Risk-Valuation',
  title: <FormattedMessage id="Risk-Valuation" />,
  type: 'group',
  children: [
    {
      id: 'aggregated-risk',
      title: <FormattedMessage id="aggregated-risk" />,
      type: 'collapse',
      icon: icons.CodepenCircleOutlined,
      children: [
        {
          id: 'risk-credit',
          title: <FormattedMessage id="risk-credit" />,
          type: 'item',
          url: '/risk/credit',
          target: false
        },],
      
    },
   
  ]
};

export default other;
