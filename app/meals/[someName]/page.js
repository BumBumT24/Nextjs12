import Header from '@/app/components/Header';

export default function Home({params}) {
    return (
      <main>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Laboratorium nr 11 - dynamic
        </h1>
        <Header title={params.someName} subtitle="Witaj na stronie"/>
      </main>
    );
  }
  