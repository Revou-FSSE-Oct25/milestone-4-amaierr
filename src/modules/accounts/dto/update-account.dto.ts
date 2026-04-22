import { IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateAccountDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    @MaxLength(10)
    accountNumber: string

    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    lowerLimit: number
    
    @IsNumber({maxDecimalPlaces: 2})
    @IsPositive()
    upperLimit: number
}
