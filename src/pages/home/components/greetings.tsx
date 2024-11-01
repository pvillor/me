import { Club, Diamond, HeartStraight, Spade } from '@phosphor-icons/react'

export function Greetings() {
  const name = 'Paulo Victor'
  const separatedName = name.split(' ').reverse()

  return (
    <div className="absolute z-20">
      <span className="font-bold text-lg">ようこそ</span>

      {separatedName.map((namePart, index1) => {
        const separatedNamePart = namePart.split('')

        if (index1 === 1) {
          separatedNamePart.unshift(' ')
        }

        return (
          <div key={index1 + length} className="flex">
            {separatedNamePart.map((letter, index2) => {
              const isEvenIndex = (index1 + index2) % 2 !== 0
              const isSecondRowFirstCell = index1 === 1 && index2 === 0

              return (
                <div
                  key={index2 + length}
                  className={`${isEvenIndex ? 'bg-zinc-50' : 'bg-rose-500'} size-10 sm:size-12 md:size-20 border opacity-85 border-zinc-950 flex items-center justify-center`}
                >
                  <div
                    className={`${isEvenIndex ? 'text-zinc-950' : 'text-zinc-50'}`}
                  >
                    {isSecondRowFirstCell ? (
                      <div className="flex w-full h-full justify-between">
                        <HeartStraight
                          className="size-2 sm:size-3 md:size-4 text-rose-500"
                          weight="fill"
                        />
                        <Club
                          className="size-2 sm:size-3 md:size-4 text-zinc-800"
                          weight="fill"
                        />
                        <Diamond
                          className="size-2 sm:size-3 md:size-4 text-rose-500"
                          weight="fill"
                        />
                        <Spade
                          className="size-2 sm:size-3 md:size-4 text-zinc-800"
                          weight="fill"
                        />
                      </div>
                    ) : (
                      <span className="font-medium text-4xl md:text-7xl">
                        {letter.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
