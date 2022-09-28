import css from './Button.module.css';

const Button = ({children,onClick, ...props}) => {
    return (
        <div className={css.Button} onClick={onClick} {...props}>
            {children}
        </div>
    );
};

export {Button};
