import React from 'react';
import { IssuePriority } from 'constants/issues';
import { issuePriorityColors } from 'utils/styles';
import { PriorityIcon } from './styles';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

interface IssuePriorityIconProps {
  priority: any;
}

const IssuePriorityIcon: React.FC<IssuePriorityIconProps> = ({ priority }) => {
  const iconType = [IssuePriority.LOW, IssuePriority.LOWEST].includes(priority) ? 'arrow-down' : 'arrow-up';

  const ArrowUpOutlinedColored = () => <ArrowUpOutlined style={{ color: issuePriorityColors[priority] }} />;
  const ArrowDownOutlinedColored = () => <ArrowDownOutlined style={{ color: issuePriorityColors[priority] }} />;

  const iconTypes: Record<string, React.FC> = {
    'arrow-down': ArrowDownOutlinedColored,
    'arrow-up': ArrowUpOutlinedColored,
  };

  const IconComponent = iconTypes[iconType];

  return <PriorityIcon component={IconComponent} />;
};

export default IssuePriorityIcon;
