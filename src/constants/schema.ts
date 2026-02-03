import siteData from "../data/site.json";

const getSkillOptions = () => {
    return siteData.skills.data.flatMap((group) =>
        group.skills.map((skill) => ({
            label: skill.name,
            value: skill.name
        }))
    );
};

export const SCHEMA_FIELDS = [
    { name: "home", label: "Inicio", inMenu: true },
    { name: "about", label: "Sobre mí", inMenu: true },
    { name: "skills", label: "Habilidades", inMenu: true },
    { name: "experience", label: "Experiencia", inMenu: true },
    { name: "education", label: "Educación", inMenu: true },
    { name: "projects", label: "Proyectos", inMenu: true },
    { name: "contact", label: "Contacto", inMenu: true },
    { name: "urls", label: "URLs", inMenu: false },
];

export const fieldDefinitions: Record<string, any> = {
    home: [
        { type: "string", name: "title", label: "Título" },
        { type: "string", name: "subtitle", label: "Subtítulo" },
    ],
    about: [
        { type: "string", name: "description", label: "Descripción", ui: { component: "textarea" } }
    ],
    experience: [
        {
            type: "object",
            name: "data",
            label: "Experiencia Laboral",
            list: true,
            ui: { itemProps: (item: any) => ({ label: `${item?.company} - ${item?.role}` }) },
            fields: [
                { type: "string", name: "company", label: "Empresa" },
                { type: "string", name: "role", label: "Puesto" },
                { type: "string", name: "description", label: "Logros/Responsabilidades", ui: { component: "textarea" } },
                { type: "datetime", name: "startDate", label: "Inicio" },
                { type: "datetime", name: "endDate", label: "Fin (Vacio para 'Actual')" },
            ]
        }
    ],
    skills: [
        {
            type: "object",
            name: "data",
            label: "Lista de Habilidades",
            list: true,
            ui: {
                itemProps: (item: any) => ({ label: item?.category })
            },
            fields: [
                { type: "string", name: "category", label: "Categoría" },
                {
                    type: "object",
                    name: "skills", // Ahora este será un array de objetos
                    label: "Skills con Icono",
                    list: true,
                    ui: {
                        itemProps: (item: any) => ({ label: item?.name }), // Para ver el nombre en el CMS
                    },
                    fields: [
                        { type: "string", name: "name", label: "Nombre de la Skill" },
                        { type: "image", name: "icon", label: "Icono (SVG/PNG)" },
                    ],
                },
            ],
        },
    ],
    education: [
        {
            type: "object", name: "data", label: "Historial Académico", list: true,
            ui: { itemProps: (item: any) => ({ label: item?.degree }) },
            fields: [
                { type: "string", name: "degree", label: "Título" },
                { type: "string", name: "institution", label: "Institución" },
                { type: "datetime", name: "startDate", label: "Fecha Inicio", ui: { dateFormat: "DD/MM/YYYY", parse: (val: any) => val?.format?.("YYYY-MM-DD") || val } },
                {
                    type: "datetime", name: "endDate", label: "Fecha Fin", ui: {
                        dateFormat: "DD/MM/YYYY", parse: (val: any) => {
                            return val && typeof val.format === 'function'
                                ? val.format("YYYY-MM-DD")
                                : (val || "");
                        }
                    }
                },
            ]
        }
    ],
    projects: [
        {
            type: "object",
            name: "data",
            label: "Mis Proyectos",
            list: true,
            ui: { itemProps: (item: any) => ({ label: item?.title }) },
            fields: [
                { type: "string", name: "title", label: "Título" },
                {
                    type: "image",
                    name: "gallery",
                    label: "Galería de Imágenes",
                    list: true
                },
                { type: "string", name: "description", label: "Descripción", ui: { component: "textarea" } },
                { type: "string", name: "gitHubUrl", label: "GitHub URL" },
                { type: "string", name: "demoUrl", label: "Demo URL" },
                {
                    type: "string",
                    name: "techStack",
                    label: "Tecnologías Usadas",
                    list: true,
                    options: getSkillOptions(),
                },
            ]
        }
    ],
    contact: [
        { type: "string", name: "email", label: "Email" },
        { type: "string", name: "whatsapp", label: "WhatsApp" },
    ],
    urls: [
        {
            type: "object",
            name: "url",
            label: "URLs",
            list: true,
            ui: { itemProps: (item: any) => ({ label: item?.name }) },
            fields: [
                { type: "string", name: "name", label: "Nombre" },
                { type: "image", name: "icon", label: "Icono" },
                { type: "string", name: "label", label: "Título" },
                { type: "string", name: "url", label: "URL" },
            ],
        }
    ]
};