import React, { useContext } from 'react';
import { CalcContext } from '../context/CalcContext';

type buttonProps = {
    value: string
}

const getStyleName = (btn: string) => {
    const className: any = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt'
    }
    return className[btn];
}

const Button = ({ value }: buttonProps) => {
    const { calc, setCalc } = useContext(CalcContext);

    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }

    const resetClick = () => {
        setCalc({ sign: '', num: 0, res: 0 });
    }

    const signClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }

    const equalsClick = () => {
        if (calc.res && calc.num) {
            const math = (x: string, y: string, sign: string) => {
                const a = parseFloat(x);
                const b = parseFloat(y);
                const result: any = {
                    '+': () => a + b,
                    '-': () => a - b,
                    'x': () => a * b,
                    '/': () => a / b,
                }
                return result[sign](a, b);
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }
    }

    const handleClickButton = () => {
        const number = value.toString();
        let numberValue;
        if (number === '0' && calc.num === 0) {
            numberValue = '0'
        } else {
            numberValue = Number(calc.num + number);
        }
        setCalc({
            ...calc,
            num: numberValue
        })
    }

    const percentClick = () => {
        setCalc({
            num: (calc.num / 100),
            res: (calc.res / 100),
            sign: ''
        })
    }

    const invertClick = () => {
        setCalc({
            num: calc.num ? calc.num * -1 : 0,
            res: calc.num ? calc.num * -1 : 0,
            sign: ''
        })
    }

    const handleButtonClick = () => {
        const results: any = {
            '.': commaClick,
            'C': resetClick,
            '/': signClick,
            'x': signClick,
            '-': signClick,
            '+': signClick,
            '=': equalsClick,
            '%': percentClick,
            '+-': invertClick
        }
        if (results[value]) {
            return results[value]();
        } else {
            return handleClickButton()
        }
    }

    return (
        <button
            onClick={handleButtonClick}
            className={`${getStyleName(value)} button`}
        >{value}</button>
    )
}

export default Button;