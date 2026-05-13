import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Post()
    createUser(@Body() user: {}) {
        return {
            message: "user created",
            data: user
        }
    }
    @Get(":id")
    getOneUser(@Param('id') id: string) {
        return {
            message: `one user ${id}`
        }
    }
    @Get()
    getAllUsers(@Query() role?: string, @Query() email?: string) {
        return {
            message: "all user",
            data: role, email
        }
    }
    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() data: {},) {
        return { id, ...data }
    }
    @Delete(':id')
    delete(@Param('id') id: string) {
        return { id }
    }

}
