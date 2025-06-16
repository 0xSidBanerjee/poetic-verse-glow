
import { Link } from 'react-router-dom';
import { Mail, Instagram, BookOpen, Clock, ArrowLeft } from 'lucide-react';

const poems = [
  {
    id: 1,
    title: "Whispers of Dawn",
    excerpt: "In the gentle break of morning light, Where shadows dance with golden rays...",
    content: `In the gentle break of morning light,
Where shadows dance with golden rays,
I find the quiet poetry of sight—
Each moment blooms in countless ways.

The world awakens, soft and new,
With dewdrops kissing blades of grass,
And in this silence, I find you,
In every breath that comes to pass.`,
    date: "March 15, 2024",
    readTime: "2 min read"
  },
  {
    id: 2,
    title: "The Space Between",
    excerpt: "Between the words we never say, Lives all the love we cannot name...",
    content: `Between the words we never say,
Lives all the love we cannot name—
In glances held at break of day,
In touches that ignite like flame.

Here dwells the language of the heart,
Unspoken truths that bind our souls,
Where every ending, every start,
Makes broken spirits somehow whole.`,
    date: "February 28, 2024",
    readTime: "2 min read"
  },
  {
    id: 3,
    title: "City Solitude",
    excerpt: "Among the crowds, I walk alone, A single voice in urban choir...",
    content: `Among the crowds, I walk alone,
A single voice in urban choir,
The city's heart, like polished stone,
Reflects my own unquenched desire.

In concrete canyons, dreams take flight,
Through windows glowing amber warm,
Each soul a star in endless night,
Together weathering the storm.`,
    date: "January 12, 2024",
    readTime: "2 min read"
  },
  {
    id: 4,
    title: "Autumn's Testament",
    excerpt: "The leaves speak truth in golden tongue, Of time that flows like autumn wine...",
    content: `The leaves speak truth in golden tongue,
Of time that flows like autumn wine,
Each season's song that must be sung
Before the winter's harsh design.

In falling leaves, I see my past,
In budding trees, my future's face—
Nothing stays, yet nothing's lost
In nature's endless, sacred space.`,
    date: "October 3, 2023",
    readTime: "3 min read"
  },
  {
    id: 5,
    title: "Midnight Reverie",
    excerpt: "When darkness wraps the world in velvet dreams, And silence sings its ancient song...",
    content: `When darkness wraps the world in velvet dreams,
And silence sings its ancient song,
I find myself in moonlit streams
Of thought that carry me along.

The night unveils what day conceals—
The tender truths we dare not speak,
In shadows, every heart reveals
The love and peace that souls do seek.`,
    date: "September 8, 2023",
    readTime: "2 min read"
  },
  {
    id: 6,
    title: "Ocean's Embrace",
    excerpt: "Where waves meet shore in endless dance, The sea tells stories old and deep...",
    content: `Where waves meet shore in endless dance,
The sea tells stories old and deep,
Of sailors lost to circumstance,
Of promises the tides still keep.

I stand upon this shifting sand,
And feel the pull of distant shores,
Where time moves slow, by nature's hand,
And peace lives on forevermore.`,
    date: "August 22, 2023",
    readTime: "2 min read"
  }
];

const Poems = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif text-stone-800 hover:text-amber-700 transition-colors">
            Verses
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/poems" className="text-stone-800 font-medium border-b-2 border-amber-600">
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

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              All Poems
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl">
              A collection of verses exploring love, solitude, nature, and the quiet moments that define us.
            </p>
          </div>

          {/* Poems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem, index) => (
              <article 
                key={poem.id}
                className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-stone-200/50 p-6 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-serif text-stone-800 mb-3 group-hover:text-amber-700 transition-colors">
                    {poem.title}
                  </h2>
                  <div className="flex items-center text-sm text-stone-500 space-x-4 mb-4">
                    <span>{poem.date}</span>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {poem.readTime}
                    </div>
                  </div>
                </div>
                
                <p className="text-stone-600 leading-relaxed mb-6 italic">
                  {poem.excerpt}
                </p>
                
                <div className="prose prose-sm">
                  <div className="whitespace-pre-line text-stone-700 leading-7 font-serif">
                    {poem.content}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 p-8 md:p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif text-stone-800 mb-4">
                Stay Connected
              </h3>
              <p className="text-stone-600 mb-6">
                Follow my journey as new verses find their way into the world.
              </p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="mailto:poet@example.com" 
                  className="flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition-colors"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
                <a 
                  href="https://instagram.com/yourhandle" 
                  className="flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition-colors"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://goodreads.com/yourprofile" 
                  className="flex items-center space-x-2 text-stone-600 hover:text-amber-600 transition-colors"
                >
                  <BookOpen size={20} />
                  <span>Goodreads</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Poems;
