// Metas padronizadas: 
import Head from "next/head";

export default function MyHead() {
    return (
        <Head>
            <title>Maestri.Edu</title>
            <link rel="icon" href="../public/logo_maestri_icon_1386x1653.png" type="image/png" sizes = "14x16" />
            <meta charset="UTF-8" />
            <meta name="description" content="Desperte para um Ano Novo repleto de possibilidades! Na Maestri.Edu, incentivamos você a ser o protagonista da sua jornada educacional. Faça deste ano o início de uma era de conquistas e sucesso." />
            <meta name="keywords" content="Maestri, Faculdade, Salário Mínimo, Educação, Qualidade, Transformação" />
            <meta name="author" content="Matheus Caprioli" />
            <meta http-equiv="content-language" content="pt-BR" />
            <meta name="google" content="notranslate" />

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sua+Fonte" /> */}
            {/* <link rel="stylesheet" href="/caminho/para/seu-estilo.css" /> */}

            <link rel="apple-touch-icon" href="../public/logo_maestri_icon_1386x1653.png" />


        </Head>
    );
};