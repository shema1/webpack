import { sum, mult } from '../calculator';

it('sum work true', () => {
    const result = sum(2, 2);

    expect(result).toEqual(4);
});

it('mult work true', () => {
    const result = mult(2, 5);

    expect(result).toEqual(10);
});