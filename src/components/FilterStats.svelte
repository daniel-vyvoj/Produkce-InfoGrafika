<div class="bg-white shadow-md rounded-lg p-6">
    <h2 class="text-lg font-bold mb-4">Statistiky</h2>
    <div class="flex justify-between items-center mb-6">
        <div>
            <label for="months" class="block text-gray-700 font-bold mb-2">Měsíc:</label>
            <div class="relative">
                <select id="months" name="months" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>Leden</option>
                    <option>Únor</option>
                    <option>Březen</option>
                    <option>Duben</option>
                    <option>Květen</option>
                    <option>Červen</option>
                    <option>Červenec</option>
                    <option>Srpen</option>
                    <option>Září</option>
                    <option>Říjen</option>
                    <option>Listopad</option>
                    <option>Prosinec</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M14.707 7.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 1 0 1.414 1.414L14 8.414V14a1 1 0 1 0 2 0V8a.997.997 0 0 0-.293-.707z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <label for="weeks" class="block text-gray-700 font-bold mb-2">Týden:</label>
            <div class="relative">
                <select id="weeks" name="weeks" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>Tento týden</option>
                    <option>Předchozí týden</option>
                    <option>Před dvěma týdny</option>
                    <option>Před třemi týdny</option>
                    <option>Před měsícem</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M14.707 7.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 1 0 1.414 1.414L14 8.414V14a1 1 0 1 0 2 0V8a.997.997 0 0 0-.293-.707z"/>
                    </svg>
                </div>
            </div>
        </div>
        <div>
            <label for="days" class="block text-gray-700 font-bold mb-2">Den:</label>
            <div class="relative">
                <select id="days" name="days" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option>Dnes</option>
                    <option>Včera</option>
                    <option>Předevčírem</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M14.707 7.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 1 0 1.414 1.414L14 8.414V14a1 1 0 1 0 2 0V8a.997.997 0 0 0-.293-.707z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-between items-center mb-6">
        <div class="w-1/2">
            <div class="bg-gray-100 rounded-lg p-4 mt-2">
                <div class="flex items-center mb-2">
                    <div class="h-4 w-4 rounded-full bg-blue-500"></div>
                    <span class="text-gray-700 ml-2">Denní statistiky</span>
                </div>
                <div class="relative pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200">
                Návštěvnost
              </span>
                        </div>
                        <div class="text-right">
              <span class="text-xs font-semibold inline-block text-blue-600">
                20
              </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div style="width: 40%;" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                        <div style="width: 40%;" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-1/2">
            <div class="bg-gray-100 rounded-lg p-4 mt-2">
                <div class="flex items-center mb-2">
                    <div class="h-4 w-4 rounded-full bg-blue-500"></div>
                    <span class="text-gray-700 ml-2">Průměrný výdělek za týden</span>
                </div>
                <div class="relative pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
              <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200">
                Výdělek
              </span>
                        </div>
                        <div class="text-right">
              <span class="text-xs font-semibold inline-block text-blue-600">
                $250
              </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div style="width: 50%;" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">Zobrazit</button>
        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Resetovat</button>
    </div>
</div>
