import cn from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <li>
      <article className={cn('TodoInfo', { 'TodoInfo--completed': completed })}>
        <h2 className="TodoInfo__title">{title}</h2>

        <UserInfo user={user} />
      </article>
    </li>
  );
};
