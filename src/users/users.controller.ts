import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserDTO } from "./dtos/createUser.dto";
import { UsersService } from "./users.service";

@Controller('users')
@UseGuards(AuthGuard('azure-ad'))
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    
    @Get('')
    getAll() {
        return this.userService.getAll();
    }

    @Post('')
    createOne(@Body() body: CreateUserDTO) {
        return this.userService.saveUser(body.email);
    }
}