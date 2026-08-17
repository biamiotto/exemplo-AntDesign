'use client';

import { Pagination, Card, Spin } from 'antd';
import { Users } from 'lucide-react';
import axios from 'axios';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function page() {
    const [personagens, setPersonagens] = useState([]);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [pagina, setPagina] = useState(1);
    const [carregando, setCarregando] = useState();

    const buscarPersonagens = async (numeroPagina) => {
        setCarregando(true);
        toast.loading('Carregando personagens...', { id: 'personagens' });

        try {
            const { data } = await axios.get(
                `https://rickandmortyapi.com/api/character?page=${numeroPagina}`,
            );

            setPersonagens(data.results);
            setTotalPaginas(data.info.pages);
            setPagina(numeroPagina);

            toast.success('Personagens carregados', { id: 'personagens' });
        } catch (error) {
            toast.error('Erro ao carregar personagens.', { id: 'personagens' });
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        buscarPersonagens(1);
    }, []);

    return (
        <div className="flex min-h-screen flex-col p-6">
            <header className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:pr-10">
                <h1 className="flex items-center gap-2 text-2xl font-bold sm:text-4xl">
                    <Users />
                    Personagens
                </h1>

                <Pagination
                    current={pagina}
                    pageSize={1}
                    total={totalPaginas}
                    onChange={buscarPersonagens}
                />
            </header>

            {carregando ? (
                <div className="flex flex-1 items-center justify-center">
                    <Spin size="large" />
                </div>
            ) : (
                <div className="flex flex-wrap items-center justify-center gap-6">
                    {personagens.map((personagem) => (
                        <Card
                            key={personagem.id}
                            className="w-full max-w-65 shadow-lg transition-transform hover:scale-104"
                            cover={
                                <Image
                                    src={personagem.image}
                                    alt={personagem.name}
                                    width={280}
                                    height={280}
                                    className="h-auto w-full"
                                />
                            }>
                            <Card.Meta
                                title={personagem.name}
                                description={`${personagem.status} - ${personagem.species}`}
                            />
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
