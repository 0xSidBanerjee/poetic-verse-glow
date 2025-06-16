
import { Link } from 'react-router-dom';
import { Mail, Instagram, BookOpen, ArrowLeft, Heart, Coffee, Pen } from 'lucide-react';

const About = () => {
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
            <Link to="/about" className="text-stone-800 font-medium border-b-2 border-amber-600">
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
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-stone-600 hover:text-stone-800 transition-colors mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              About the Poet
            </h1>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-stone-700 leading-relaxed mb-6 italic">
                  "I write because silence is too heavy to carry alone."
                </p>
                
                <p className="text-stone-600 leading-relaxed mb-6">
                  Welcome to my corner of the literary world. I'm a poet who finds verses in the quiet moments—
                  in the way morning light filters through coffee shop windows, in the solitude of crowded streets, 
                  and in the spaces between heartbeats where truth lives.
                </p>
                
                <p className="text-stone-600 leading-relaxed mb-6">
                  My poetry is born from the intersection of classical tradition and contemporary experience. 
                  I believe that the ancient art of verse-making still has profound relevance in our modern world, 
                  offering both solace and understanding to those who seek deeper meaning in everyday moments.
                </p>
                
                <p className="text-stone-600 leading-relaxed">
                  Each poem in this collection represents a moment of clarity, a fragment of beauty discovered 
                  in the ordinary, or an attempt to give voice to the ineffable experiences that shape our lives.
                </p>
              </div>
            </div>

            {/* Writing Process */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-stone-200/50 p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-3">Early Mornings</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Most of my poetry emerges in the quiet hours before dawn, when the world is still and thoughts flow freely.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-stone-200/50 p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-3">From the Heart</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Every verse begins as an emotion, a feeling that demands to be transformed into something tangible and shared.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-stone-200/50 p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pen className="text-amber-600" size={24} />
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-3">Careful Craft</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Each word is chosen with intention, each line refined until it carries the weight of truth and beauty.
                </p>
              </div>
            </div>

            {/* Inspirations */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 p-8 md:p-12">
              <h2 className="text-3xl font-serif text-stone-800 mb-6">Literary Inspirations</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-stone-600 leading-relaxed mb-6">
                  My work draws inspiration from the masters who have shaped the landscape of poetry. 
                  From the transcendental wisdom of Walt Whitman to the precise imagery of William Carlos Williams, 
                  from the confessional honesty of Sylvia Plath to the mystical depth of Rumi.
                </p>
                
                <blockquote className="border-l-4 border-amber-600 pl-6 italic text-xl text-stone-700 my-8">
                  "The woods are lovely, dark and deep, but I have promises to keep, 
                  and miles to go before I sleep."
                  <footer className="text-base text-stone-500 mt-2 not-italic">— Robert Frost</footer>
                </blockquote>
                
                <p className="text-stone-600 leading-relaxed">
                  These voices remind me that poetry is both ancient and immediate, both universal and deeply personal. 
                  They have taught me that the poet's role is to be a witness, a translator of human experience, 
                  and a keeper of the sacred flame of language.
                </p>
              </div>
            </div>

            {/* Connect */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 p-8 md:p-12 text-center">
              <h2 className="text-3xl font-serif text-stone-800 mb-6">Let's Connect</h2>
              <p className="text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                Poetry is meant to be shared, discussed, and felt. I'd love to hear from fellow poetry lovers, 
                writers, and anyone who finds solace in the written word.
              </p>
              
              <div className="flex justify-center space-x-8">
                <a 
                  href="mailto:poet@example.com" 
                  className="flex flex-col items-center space-y-2 text-stone-600 hover:text-amber-600 transition-all duration-300 group"
                >
                  <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <Mail size={24} />
                  </div>
                  <span className="font-medium">Email Me</span>
                  <span className="text-sm text-stone-500">poet@example.com</span>
                </a>
                
                <a 
                  href="https://instagram.com/yourhandle" 
                  className="flex flex-col items-center space-y-2 text-stone-600 hover:text-amber-600 transition-all duration-300 group"
                >
                  <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <Instagram size={24} />
                  </div>
                  <span className="font-medium">Instagram</span>
                  <span className="text-sm text-stone-500">@yourhandle</span>
                </a>
                
                <a 
                  href="https://goodreads.com/yourprofile" 
                  className="flex flex-col items-center space-y-2 text-stone-600 hover:text-amber-600 transition-all duration-300 group"
                >
                  <div className="bg-stone-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <BookOpen size={24} />
                  </div>
                  <span className="font-medium">Goodreads</span>
                  <span className="text-sm text-stone-500">Reading List</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
