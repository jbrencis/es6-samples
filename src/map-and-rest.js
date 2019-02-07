const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <TodoListItem {...itemProps} /> // if `label` = `item.label` and `name`
        = `item.name` // u can use `...rest` operator // itemProps contains
        everything exept `id`
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default TodoList;
