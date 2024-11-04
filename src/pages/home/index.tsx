import { ChessPieces } from './components/chess-pieces'
import { Greetings } from './components/greetings'

export function Home() {
  return (
    <div className="h-screen flex justify-center -mt-16 md:mt-0 md:items-center">
      <div className="flex flex-col justify-center items-center group">
        <Greetings />
        <ChessPieces />

        <div className="border-8 border-zinc-950 opacity-30 md:opacity-90">
          {Array.from({ length: 8 }).map((_, index1) => {
            return (
              <div key={index1 + length} className="flex">
                {Array.from({ length: 8 }).map((_, index2) => {
                  const isEvenIndex = (index1 + index2) % 2 !== 0

                  return (
                    <div
                      key={index2 + length}
                      className={`${isEvenIndex ? 'bg-zinc-50' : 'bg-zinc-950'} size-8 sm:size-10 border border-zinc-950`}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
