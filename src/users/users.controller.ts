import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDTO } from "./dtos/createUser.dto";
import { UsersService } from "./users.service";
import { Request } from 'express';

@Controller('users')
@UseGuards(AuthGuard('azure-ad'))
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get('me')
    getMe(@Req() req: Request) {
        return req.user;
    }
    
    @Get('')
    getAll() {
        return this.userService.getAll();
    }

    @Post('')
    createOne(@Body() body: CreateUserDTO) {
        return this.userService.saveUser(body.email);
    }
}