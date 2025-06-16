
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, BookOpen, ArrowRight } from 'lucide-react';

const poems = [
  {
    id: 1,
    title: "Whispers of Dawn",
    content: `In the gentle break of morning light,
Where shadows dance with golden rays,
I find the quiet poetry of sight—
Each moment blooms in countless ways.

The world awakens, soft and new,
With dewdrops kissing blades of grass,
And in this silence, I find you,
In every breath that comes to pass.`,
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "The Space Between",
    content: `Between the words we never say,
Lives all the love we cannot name—
In glances held at break of day,
In touches that ignite like flame.

Here dwells the language of the heart,
Unspoken truths that bind our souls,
Where every ending, every start,
Makes broken spirits somehow whole.`,
    date: "February 28, 2024"
  },
  {
    id: 3,
    title: "City Solitude",
    content: `Among the crowds, I walk alone,
A single voice in urban choir,
The city's heart, like polished stone,
Reflects my own unquenched desire.

In concrete canyons, dreams take flight,
Through windows glowing amber warm,
Each soul a star in endless night,
Together weathering the storm.`,
    date: "January 12, 2024"
  },
  {
    id: 4,
    title: "Autumn's Testament",
    content: `The leaves speak truth in golden tongue,
Of time that flows like autumn wine,
Each season's song that must be sung
Before the winter's harsh design.

In falling leaves, I see my past,
In budding trees, my future's face—
Nothing stays, yet nothing's lost
In nature's endless, sacred space.`,
    date: "October 3, 2023"
  }
];

const Index = () => {
  const [currentPoem, setCurrentPoem] = useState(poems[0]);

  useEffect(() => {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    setCurrentPoem(randomPoem);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif text-stone-800 hover:text-amber-700 transition-colors">
            Verses
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/poems" className="text-stone-600 hover:text-stone-800 transition-colors font-medium">
              All Poems
            </Link>
            <Link to="/about" className="text-stone-600 hover:text-stone-800 transition-colors font-medium">
              About
            </Link>
            <div className="flex items-center space-x-4">
              <a href="mailto:poet@example.com" className="text-stone-500 hover:text-amber-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://instagram.com/yourhandle" className="text-stone-500 hover:text-amber-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://goodreads.com/yourprofile" className="text-stone-500 hover:text-amber-600 transition-colors">
                <BookOpen size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Welcome Message */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif text-stone-800 mb-6 leading-tight">
              Where Words
              <span className="block text-amber-700">Find Their Voice</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              A collection of verses born from quiet moments, urban solitude, and the endless dance between light and shadow.
            </p>
          </div>

          {/* Featured Poem */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-stone-200/50 p-8 md:p-12 mb-12 hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
            <div className="text-center mb-8">
              <span className="text-sm text-amber-600 font-medium tracking-wide uppercase">Today's Verse</span>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mt-2 mb-4">
                {currentPoem.title}
              </h2>
              <span className="text-stone-500 text-sm">{currentPoem.date}</span>
            </div>
            
            <div className="prose prose-lg mx-auto">
              <div className="whitespace-pre-line text-stone-700 leading-8 font-serif text-lg text-center italic">
                {currentPoem.content}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link 
              to="/poems" 
              className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Explore All Poems</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Decorative Quote */}
          <div className="mt-20 text-center">
            <blockquote className="text-2xl font-serif text-stone-600 italic max-w-3xl mx-auto leading-relaxed">
              "Poetry is the rhythmical creation of beauty in words."
              <footer className="text-base text-stone-500 mt-4 not-italic">— Edgar Allan Poe</footer>
            </blockquote>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
