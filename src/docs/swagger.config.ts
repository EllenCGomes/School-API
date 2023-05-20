const swaggerConfig = {
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Swagger School',
            version: '1.0.0',
        },
        servers: [{
            url: 'http://localhost:3005',
            description: 'servidor local',
        }],
    },
    apis: [
        "./src/routes/classRouter.ts",
        "./src/routes/courseRouter.ts",
        "./src/routes/professorRouter.ts",
        "./src/routes/studentRouter.ts",
        "./src/routes/subjectRouter.ts",
    ],
};

export default swaggerConfig;