type AnyFunction = (...args: any[]) => void;

export function debounce(func: AnyFunction, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (...args:any[]) {
    // Clear the previous timeout
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay);
  };
}

export function getSessionToken(){
  return localStorage.getItem('fcSession'); 
}

