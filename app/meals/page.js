import Header from '@/app/components/Header';
import classes from './page.module.css';
import MealsGrid from '../components/meals/meal-grid';
import Link from 'next/link';
export default function Home() {
    return (
      <main>
        <header className={classes.header}>
          <h1>
            Delicious meals, created {' '}
            <span classname={classes.highlight}>by you</span>
          </h1>
          <p>
            Choose your favorite recipe and cook it yourself. It is easy and fun!
          </p>
          <p className={classes.cta}>
            <Link href="/meals/share">
            Share Your Favorite Recipe
            </Link>
          </p>
        </header>
        <main className={classes.main}>
          
        </main>
      </main>
    );
  }
  