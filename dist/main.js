"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const class_validator_1 = require("class-validator");
const unauthorized_interceptor_1 = require("./interceptors/unauthorized.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    app.useGlobalInterceptors(new unauthorized_interceptor_1.UnauthorizedInterceptor());
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map