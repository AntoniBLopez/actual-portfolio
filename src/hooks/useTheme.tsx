import { useCallback, useMemo, useState } from "react";

function useTheme() {
  const [isLightMode, setStateLightMode] = useState(true);

  const changeTheme = useCallback(
    () => setStateLightMode((prevValue) => !prevValue),
    []
  )

  const values = useMemo(() => ({ isLightMode, changeTheme }), [
    isLightMode,
    changeTheme
  ])

  return values
}

export default useTheme