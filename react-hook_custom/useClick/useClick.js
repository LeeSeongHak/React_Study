const useClick = onClick => {
    if (typeof onClick !== "function") {
        return;
    }
    const element = useRef();
    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        //useEffect의 return은 componentWillUnMount와 같이 UnMount일 때 return됨.
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return element;
};